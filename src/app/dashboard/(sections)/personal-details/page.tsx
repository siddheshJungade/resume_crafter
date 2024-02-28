import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputWithLabel";

export default function PersonalDetails() {
  const inputs = [
    { name: "First Name", type: "text", placeholder: "Deo" },
    { name: "Last Name", type: "text", placeholder: "Tysoen" },
    { name: "Email", type: "email", placeholder: "deo@resumecrafter.dev" },
    { name: "Phone No", type: "tel", placeholder: "+91 9876543210" },
    { name: "Github URL", type: "url", placeholder: "https://github.com/deo" },
    { name: "Linkedin URL", type: "url", placeholder: "https://linkedin.com/in/deo" }
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="grid grid-cols-2 w-1/2 gap-6 content-center">
        {inputs.map((input, index) => (
          <InputWithLabel key={index} name={input.name} type={input.type} placeholder={input.placeholder} />
        ))}
        <Button className="col-span-2">Save</Button>
      </div>
    </div>
  );
} 