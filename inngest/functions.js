import { inngest } from "./client";

export const processTask = inngest.createFunction(
  {
    id: "process-task",
    name: "Process Task",
    triggers: [{ event: "app/hello" }],
  },
  async ({ event, step }) => {
    // This function runs when the "app/hello" event is sent
    console.log("Received event:", event.name);

    // Add your processing logic here
    return { message: "Hello from Inngest!", event: event.name };
  }
);
