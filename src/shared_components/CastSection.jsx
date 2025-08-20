import CastCard from "./CastCard";

const CastSection = ({ castData }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl text-white font-semibold mb-4">Cast</h2>
      <div className="flex flex-wrap gap-4">
        {castData.length > 0 ? (
          castData.map((castMember) => (
            <CastCard
              key={castMember.cast_id}
              profile_path={castMember.profile_path}
              name={castMember.name}
              character={castMember.character}
            />
          ))
        ) : (
          <p className="text-white">No cast information available.</p>
        )}
      </div>
    </div>
  );
};

export default CastSection;
