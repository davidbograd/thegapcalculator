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
  handlePersonDataChange: (
    newValue: string,
    index: number,
    field:
      | "annualSalary"
      | "totalLeave"
      | "companyPaidLeave"
      | "governmentPaidLeave"
  ) => void;
  handlePartnerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Person = ({
  person,
  index,
  handlePersonDataChange,
  handlePartnerChange,
}: Props) => {
  const personalisedPlaceholder =
    index == 0
      ? {
          salary: "Enter salary",
          totalLeave: "Eg. 40",
          companyPaidLeave: "Eg. 8",
        }
      : {
          salary: "Enter salary",
          totalLeave: "Eg. 10",
          companyPaidLeave: "Eg. 2",
        };

  return (
    <div
      key={index}
      className="p-6 my-4 rounded-md border"
      id={"person-" + { index }}
    >
      <p className="text-xs text-slate-500 font-bold mb-4">
        {index == 0 ? "PRIMARY" : "SECONDARY"} CARER
      </p>
      <div className="flex flex-wrap gap-4">
        <Field
          label="Annual salary"
          placeholder={personalisedPlaceholder.salary}
          value={person.annualSalary}
          description="Salary excluding super"
          dollarOrWeek="dollar"
          onChange={(newValue: string) =>
            handlePersonDataChange(newValue, index, "annualSalary")
          }
        />

        <Field
          label="Total leave"
          placeholder={personalisedPlaceholder.totalLeave}
          value={person.totalLeave}
          description="How many weeks of leave are taking in total?"
          dollarOrWeek="week"
          onChange={(newValue: string) =>
            handlePersonDataChange(newValue, index, "totalLeave")
          }
        />

        <Field
          label="Company paid leave"
          placeholder={personalisedPlaceholder.companyPaidLeave}
          value={person.companyPaidLeave}
          description="Weeks with full pay from company"
          dollarOrWeek="week"
          onChange={(newValue: string) =>
            handlePersonDataChange(newValue, index, "companyPaidLeave")
          }
        />

        {index === 0 && (
          <div>
            <label className="text-gray-700 text-base font-bold mb-1">
              Do you have a partner?
            </label>
            <div className="flex space-x-1 mt-0.5">
              <label>
                <input
                  type="radio"
                  name="partner"
                  value="yes"
                  className="hidden peer"
                  onChange={handlePartnerChange}
                />
                <div className="px-4 py-0.5 bg-gray-200 text-gray-700 rounded-full cursor-pointer peer-checked:bg-indigo-500 peer-checked:text-white">
                  Yes
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  name="partner"
                  value="no"
                  className="hidden peer"
                  onChange={handlePartnerChange}
                />
                <div className="px-4 py-0.5 bg-gray-200 text-gray-700 rounded-full cursor-pointer peer-checked:bg-indigo-500 peer-checked:text-white">
                  No
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Person;
