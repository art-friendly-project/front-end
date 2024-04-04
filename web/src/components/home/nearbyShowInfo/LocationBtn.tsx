interface locationBtn {
  locationIcon: string;
  locationKr: string;
}

const LocationBtn = ({ locationIcon, locationKr }: locationBtn) => {
  return (
    <div className="flex items-center justify-center w-1/4 mt-4">
      <button>
        <img src={locationIcon} className="w-16 h-16" />
        <span className="text-Body2-M">{locationKr}</span>
      </button>
    </div>
  );
};

export default LocationBtn;
