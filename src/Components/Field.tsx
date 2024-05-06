interface Props {
  carer: string;
  dataPoint: string;
  label: string;
  placeholder: string;
}

const Field = ({ carer, dataPoint, label, placeholder }: Props) => {
  console.log("test");
  return (
    <div>
      <label className="text-gray-700 text-base font-bold mb-1">{label}</label>
      <input
        className="w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-4"
        id={{ carer } + "-" + { dataPoint }}
        type="text"
        required
        value={dataPoint}
        //   onChange={(e) => handleChange(e.target.value, setSalary)}
        placeholder={placeholder}
        name={dataPoint}
      />
    </div>
  );
};

export default Field;
