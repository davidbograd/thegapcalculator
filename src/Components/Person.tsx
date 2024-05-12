import Field from "./Field";

interface Props {
  person: {
    carer: string;
    annualSalary: string;
    totalLeave: string;
    companyPaidLeave: string;
    governmentPaidLeave: string;
  };
  index: number;
  handleValueChange: (
    newValue: string,
    index: number,
    field:
      | "annualSalary"
      | "totalLeave"
      | "companyPaidLeave"
      | "governmentPaidLeave"
  ) => void;
}

const Person = ({ person, index, handleValueChange }: Props) => {
  const personalisedPlaceholder =
    index == 0
      ? {
          salary: "Enter annual salary",
          totalLeave: "Eg. 40",
          companyPaidLeave: "Eg. 8",
        }
      : {
          salary: "Enter annual salary",
          totalLeave: "Eg. 10",
          companyPaidLeave: "Eg. 2",
        };
  return (
    <div key={index} className="p-6 my-4 rounded-md border">
      <p className="text-xs text-slate-500 font-bold mb-4">
        {person.carer == "Primary" ? "PRIMARY" : "SECONDARY"} CARER
      </p>
      <p className="py-2">
        Person {index} makes ${person.annualSalary}. takes {person.totalLeave}{" "}
        total, {person.companyPaidLeave} company, {person.governmentPaidLeave}{" "}
        gov.
      </p>
      <div className="flex gap-4">
        <Field
          label="Annual salary input"
          placeholder={personalisedPlaceholder.salary}
          value={person.annualSalary}
          dollarOrWeek="dollar"
          onChange={(newValue: string) =>
            handleValueChange(newValue, index, "annualSalary")
          }
        />

        <Field
          label="Total Leave input"
          placeholder={personalisedPlaceholder.totalLeave}
          value={person.totalLeave}
          dollarOrWeek="week"
          onChange={(newValue: string) =>
            handleValueChange(newValue, index, "totalLeave")
          }
        />

        <Field
          label="Company paid leave"
          placeholder={personalisedPlaceholder.companyPaidLeave}
          value={person.companyPaidLeave}
          dollarOrWeek="week"
          onChange={(newValue: string) =>
            handleValueChange(newValue, index, "companyPaidLeave")
          }
        />
      </div>
    </div>
  );
};

export default Person;
