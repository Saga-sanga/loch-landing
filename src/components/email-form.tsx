import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
});

export function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-[365px] flex flex-col items-center space-y-6">
      <h3 className="px-3 text-[#B0B1B3]">Sign up for exclusive access.</h3>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={cn(
                      "w-[340px] h-14 shadow px-6 rounded-lg",
                      form.formState.errors.email && "border-red-500"
                    )}
                    placeholder="Your email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-[340px] h-14 rounded-lg">Get Started</Button>
        </form>
      </Form>
      <p className="font-semibold text-center">
        You’ll receive an email with an invite link to join.
      </p>
    </div>
  );
}
