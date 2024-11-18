  import {Landmark ,
 UserPlus, NotebookPen,CircleDollarSign,UserCog,MailQuestion,
   GalleryVerticalEnd,AudioWaveform,Command,Bus,User,BookCopy,FileChartColumnIncreasing,MessagesSquare,SquareUser} from 'lucide-react'



    export type User = {
        id: number;
        name: string;
        company: string;
        role: string;
        verified: boolean;
        status: string;
      };




export  const items = [
    {
      title: "Students",
      url: "#",
      icon: User,
      isActive: true, // Set default active status if needed
      subItems: [
        {
          title: "Student Profile",
          url: "#",
        },
        {
          title: "Certificates",
          url: "#",
        }, {
            title: "Dynamic Report",
            url: "#",
          },
      ],
    },
    {
      title: "Academics",
      url: "#",
      icon: BookCopy,
      subItems: [
        {
          title: "Day Wise Report",
          url: "#",
        },
        {
          title: "Subject wise Schedule",
          url: "#",
        },
        {
            title: "Analysis Report",
            url: "#",
          },
          {
            title: "Class, Section",
            url: "#",
          },
      ],
    },
    {
      title: "Finance",
      url: "#",
      icon: Landmark,
      subItems: [
        {
            title: "Approval Settings",
            url: "#",
          },
          {
            title: "Banks",
            url: "#",
          },
          {
              title: "Reprint Receipt",
              url: "#",
            },
            {
              title: "Pending Payments",
              url: "#",
            },
            {
              title: "Daily Collection recipt",
              url: "#",
            },
            {
              title: "Fee cards",
              url: "#",
            },
      ],
    },
    {
        title: "Employee",
        url: "#",
        icon: SquareUser,
        subItems: [
          {
            title: "Individul Employee",
            url: "#",
          },
          {
            title: "Employee List",
            url: "#",
          },
          {
            title: "Employee Department",
            url: "#",
          },
        ],
      },
    {
      title: "Attendance",
      url: "#",
      icon: FileChartColumnIncreasing,
      subItems: [
        {
          title: "Attendance Report",
          url: "#",
        },
       
      ],
    },
    {
      title: "Communication",
      url: "#",
      icon: MessagesSquare,
      subItems: [
        {
          title: "Attendance SMS",
          url: "#",
        },
        {
          title: "PAyments Pending SMS",
          url: "#",
        },
      ],
    },
    {
        title: "Transport",
        url: "#",
        icon: Bus,
        subItems: [
          {
            title: "Messages",
            url: "#",
          },
          {
            title: "Announcements",
            url: "#",
          },
        ],
      },
  ];

  
// ITEM MASTER

export const itemMaster = [
    {
      title: "Students Master",
      url: "#",
      icon: UserPlus,
      isActive: true, // Set default active status if needed
      subItems: [
        {
          title: "Admission",
          url: "#",
        },
        {
          title: "Student Update",
          url: "#",
        }, {
            title: "Student Enquiry",
            url: "#",
          },
      ],
    },
    {
      title: "Academics Master",
      url: "#",
      icon: NotebookPen,
      subItems: [
        {
          title: "Result Entry",
          url: "#",
        },
        {
          title: "Progress Card",
          url: "#",
        },
         {
            title: "Exams",
            url: "#",
          },
          {
            title: "Add Subject",
            url: "#",
          },
          {
            title: "Grades",
            url: "#",
          },
          {
            title: "Syllabus",
            url: "#",
          },
      ],
    },
    {
      title: "Finance Master",
      url: "#",
      icon: CircleDollarSign,
      subItems: [
        {
            title: "Fee Categries",
            url: "#",
          },
          {
            title: "Fee Synchronization",
            url: "#",
          },
          {
              title: "Fee Heads",
              url: "#",
            },
            {
              title: "Fee bu course",
              url: "#",
            },
            {
              title: "Incme Collection",
              url: "#",
            },
            {
              title: "Other Income",
              url: "#",
            },
       
      ],
    },
    {
        title: "Employee Master",
        url: "#",
        icon: Landmark,
        subItems: [
          {
            title: "Add EMployee",
            url: "#",
          },
          {
            title: "Employee Mapping",
            url: "#",
          },
        ],
      },
    {
      title: "Attendance Master",
      url: "#",
      icon: UserCog,
      subItems: [
        {
          title: "Students Attendance",
          url: "#",
        },
        {
          title: "Employee Attendance",
          url: "#",
        },
      ],
    },
    {
      title: "Communication Master",
      url: "#",
      icon: MailQuestion,
      subItems: [
        {
            title: "Attendance SMS",
            url: "#",
          },
          {
            title: "Payments Pending SMS",
            url: "#",
          },
      ],
    },
    {
        title: "Transport Master",
        url: "#",
        icon: Bus,
        subItems: [
          {
            title: "Messages",
            url: "#",
          },
          {
            title: "Announcements",
            url: "#",
          },
        ],
      },
  ];

// USER 
 export  const  user= {
    name: "Techvation",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }
 

 export  const teams = [
    {
      name: "SKV",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "SKV CBSE",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "SKV Girls.",
      logo: Command,
      plan: "Free",
    },
  ]