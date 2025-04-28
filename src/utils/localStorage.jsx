const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "amit@mail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design UI",
        taskDescription: "Create a modern UI design for the landing page",
        taskDate: "2025-02-05",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Complete the project documentation",
        taskDate: "2025-02-04",
        category: "documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Bugs",
        taskDescription: "Resolve reported issues in the codebase",
        taskDate: "2025-02-06",
        category: "development"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "priya@mail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Feature",
        taskDescription: "Develop the new feature as per specifications",
        taskDate: "2025-02-07",
        category: "development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review code for quality and consistency",
        taskDate: "2025-02-03",
        category: "review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Dependencies",
        taskDescription: "Update project dependencies to latest versions",
        taskDate: "2025-02-08",
        category: "maintenance"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "rahul@mail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Logo",
        taskDescription: "Create a logo for the new product line",
        taskDate: "2025-02-09",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Make a presentation for the quarterly meeting",
        taskDate: "2025-02-01",
        category: "marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Application",
        taskDescription: "Conduct tests for the new application module",
        taskDate: "2025-02-10",
        category: "quality assurance"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "sneha@mail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Code",
        taskDescription: "Improve the performance of the codebase",
        taskDate: "2025-02-11",
        category: "development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Email Template",
        taskDescription: "Create a responsive email template for newsletters",
        taskDate: "2025-02-02",
        category: "design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Set Up CI/CD",
        taskDescription: "Implement continuous integration and deployment pipelines",
        taskDate: "2025-02-12",
        category: "devops"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Conduct market research for upcoming campaigns",
        taskDate: "2025-02-13",
        category: "research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Meet with clients to discuss project requirements",
        taskDate: "2025-02-03",
        category: "management"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Refresh website content and design",
        taskDate: "2025-02-14",
        category: "maintenance"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  }
];

  
  const admin = {
    id: 1,
    email: "admin@example.com",
    password: "123"
  };
  
  export { employees, admin };


  export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  
  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
  }