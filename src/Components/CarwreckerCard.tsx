interface Props {
  wreckername: string;
  address: string;
  email?: string;
  phone?: string;
  website?: string;
  url?: string;
}

const CarwreckerCard = ({
  wreckername,
  address,
  email,
  phone,
  website,
  url,
}: Props) => {
  return (
    <div className="p-6 rounded-md border-2">
      <h2 className="text-slate-800 text-xl font-semibold">{wreckername}</h2>
      <p className="text-slate-700">{address}</p>

      {/* Email */}
      <div className="flex pt-4 items-center">
        <svg
          className="mr-2 stroke-slate-400"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </svg>
        <p className="text-slate-700">{email}</p>
        {email !== "-" && (
          <button className="bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-700 px-3 py-1 ml-2 text-xs leading-5 rounded-full font-semibold text-white">
            Copy
          </button>
        )}
      </div>

      <div className="flex items-center">
        <svg
          className="mr-2 stroke-slate-400"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        </svg>
        <p className="text-slate-700">{phone}</p>
      </div>

      {/* Website */}
      <div className="flex items-center">
        <svg
          className="mr-2 stroke-slate-400 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        {/* If website is '-' do not make it a link */}
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
