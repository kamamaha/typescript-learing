export interface Task {
    title: string;
    done: boolean;
    category?: Category; //literal type
  }
  
 export type Category = "general" | "work" | "gym" | "hobby";
