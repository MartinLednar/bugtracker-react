import "./search-result.style";

//Urobit ked budeme robit DB

export const SearchResultMembers = ({ searchData }) => {
  return (
    <div className="search-result">
      <div className="profile-info">
        <ProfileImage src={searchData.imgUrl} alt="Profile" />
        <h4 className="profile-name-search">{searchData.name}</h4>
      </div>

      <p title="Owner">
        <Star />
      </p>
    </div>
  );
};

export const SearchResultInvite = ({ searchData }) => {
  return (
    <div className="search-result">
      <div className="profile-info">
        <ProfileImage src={searchData.imgUrl} alt="Profile" />
        <h4 className="profile-name-search">{searchData.name}</h4>
      </div>

      <p className="search-invite-btn" title="Send invite">
        <Send />
      </p>
    </div>
  );
};
