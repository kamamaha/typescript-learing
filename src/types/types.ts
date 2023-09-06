export interface Task {
    title: string;
    done: boolean;
    category?: Category; //literal type
  }
  
  export enum Category {
    GENERAL = "general",
    WORK ="work",
    GYM = "gym",
    HOBBY = "hobby",
    SOCIAL = "social",
  }
 //enumy
