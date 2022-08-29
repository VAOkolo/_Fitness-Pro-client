const testFetch = () => {
    fetch("http://localhost:8000/api/gym/profile")
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

