function Card({ user }) {
    if (!user) return;
  
    const {
      avatar_url,
      created_at,
      followers,
      following,
      name,
      updated_at,
      login,
    } = user;
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return (
      <div className=" flex flex-col place-items-center dark:text-white">
        <h1 className="text-5xl mb-4">{name}</h1>
        <img src={avatar_url} alt="avatar" className="rounded-full "/>
        <br />
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <h2>Followers : {followers}</h2>
        <h2>Following : {following}</h2>
        <h5>
          {name} Created Github Profile On {formatDate(created_at)}
        </h5>
        <p>
          {name} Last Update On Github {formatDate(updated_at)}
        </p>
      </div>
    );
  }
  
  export default Card;
  
