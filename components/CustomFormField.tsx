/* eslint-disable no-unused-vars */
import { E164Number } from "libphonenumber-js/core";
import Image from "next/image";
import ReactDatePicker from "react-datepicker";
import { Control } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { Check, ChevronsUpDown, Command, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

import { Checkbox } from "./ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { RadioGroup } from "@radix-ui/react-dropdown-menu";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { CommandInput, CommandList } from "./ui/command";
import { CommandEmpty, CommandGroup, CommandItem } from "cmdk";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";



export enum FormFieldType {
  INPUT = "input",
  PASSWORD = "password",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  RADIO='radiogroup',
  COMMAND='command',
  COMBO_BOX='comboBox',
  SKELETON = "skeleton",

}

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
  onChange?: (value: any) => void; // Added onChange prop here
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-red-800 bg-light-600">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input border-0"
              disabled={props.disabled}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.PASSWORD:
        return (
          <div className="relative flex rounded-md border border-red-800 bg-light-600">
            <FormControl>
              <Input
                placeholder={props.placeholder}
                {...field}
                type={isPasswordVisible ? 'text' : 'password'}
                className="shad-input border-0 pr-10"
                disabled={props.disabled}
              />
            </FormControl>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              tabIndex={-1} // Prevent focus on this button
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {isPasswordVisible ? (
                <EyeOff className="h-5 w-5 text-gray-500" />
              ) : (
                <Eye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        );

    case FormFieldType.TEXTAREA:
      return (
        <div className="flex rounded-md border">
          <FormControl>
            <Textarea
              placeholder={props.placeholder}
              {...field}
              className="shad-textArea"
              disabled={props.disabled}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="IN"
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-red-800 bg-light-600">
          <Image
            src="/assets/icons/calendar.svg"
            height={24}
            width={24}
            alt="calendar"
            className="ml-2"
          />
          <FormControl>
            <ReactDatePicker
              showTimeSelect={props.showTimeSelect ?? false}
              selected={field.value ? new Date(field.value) : null}
              onChange={(date: Date | null) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select
            defaultValue={field.value}
            onValueChange={(value) => {
              field.onChange(value);
              if (props.onChange) {
                props.onChange(value);
              }
            }}
          >
            <SelectTrigger className="shad-select-trigger">
              <SelectValue placeholder={props.placeholder} />
            </SelectTrigger>
            <SelectContent className="shad-select-content">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
      case FormFieldType.RADIO:
        return(
          <FormControl>
         <RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-4">
            {React.Children.map(props.children, (child: any, index) => {
              const value = child.props['data-value']; // Access value
              const label = child.props['data-label']; // Access label
              return (
                <div key={index} className="flex items-center space-x-4">
                  <RadioGroupItem value={value} id={value} />
                  <label htmlFor={value} className="text-sm">
                    {label}
                  </label>
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
        )
        case FormFieldType.COMMAND:
          return(
            <FormControl>
           <Command>
           <CommandInput placeholder={props.placeholder} onValueChange={(value) => {
          if (props.onChange) {
          props.onChange(value);
            }
           }} />
         <CommandList>
         <CommandEmpty>No results found.</CommandEmpty>
         <CommandGroup heading="Suggestions">
        {props.children}
       </CommandGroup>
      </CommandList>
      </Command>
       </FormControl>
          )
        case FormFieldType.COMBO_BOX:
          return(
            <FormControl>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="w-[200px] justify-between p-2 border rounded-md border-gray-300"
            role="combobox"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {value ? value : "Select option..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search option..." />
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              <CommandGroup>
                {props.children}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </FormControl>
     )
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="shad-input-label">{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;

