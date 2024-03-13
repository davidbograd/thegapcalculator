import IconEmail from "./Icons/IconEmail.tsx";
import IconPhone from "./Icons/IconPhone.tsx";
import IconGlobe from "./Icons/IconGlobe.tsx";

interface Props {
  wreckername: string;
  address: string;
  email: string;
  phone: string;
  website: string;
  url: string;
}

const CarwreckerCard = ({
  wreckername,
  address,
  email,
  phone,
  website,
  url,
}: Props) => {
  const handleButtonClickCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="p-6 rounded-md border-2">
      <h2 className="text-slate-800 text-xl font-semibold">{wreckername}</h2>
      <p className="text-slate-700">{address}</p>

      {/* Email */}
      <div className="flex pt-4 items-center">
        <IconEmail />
        <p className="text-slate-700 truncate">{email}</p>
        {email !== "-" && (
          <button
            onClick={() => handleButtonClickCopyEmail(email)}
            className="bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-700 px-3 py-1 ml-2 text-xs leading-5 rounded-full font-semibold text-white"
          >
            Copy
          </button>
        )}
      </div>

      {/* Phone */}
      <div className="flex items-center mt-1">
        <IconPhone />
        <p className="text-slate-700">{phone}</p>
      </div>

      {/* Website */}
      <div className="flex items-center mt-1">
        {/* If website is '-' do not make it a link */}
        <IconGlobe />
        {website !== "-" ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <p className="text-slate-700 underline decoration-2 decoration-slate-400">
              {website}
            </p>
          </a>
        ) : (
          <p className="text-slate-700">-</p>
        )}
      </div>
    </div>
  );
};

export default CarwreckerCard;
