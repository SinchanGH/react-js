import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwG38p5SqncjtqfQ_3kg7QnvFt8Fo1EYUVQ&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rIxFRNX2QZlnQidGjE75yAg9jR4Jhy3Jgw&s",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrppB3mWV5QdrddW0FK-KWznGuY7CULCjcMw&s",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw9ADW_e3phAevjk1wGYCyOujxGmT_3cTQQ&s",
      companyName: "Amazon",
      datePosted: "3 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-b-GRJP49S_nvl8UDCQ2DDusVBUmQcN1Ug&s",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/500px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGtN85PJ-mHVr-C04pXsBkeeTvq4sG0DIeQ&s",
      companyName: "Tesla",
      datePosted: "4 weeks ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjUb-erX5J8t-bQ5C_reaUNPuUrv8_pygAQ&s",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo44ETcgMC4V8pRdtTYQox9I2TvJVxSuo9Yw&s",
      companyName: "Airbnb",
      datePosted: "2 days ago",
      post: "JavaScript Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Goa, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc43QcwgPWJUVFZmasVv4UUEnxOOvG4qxrLA&s",
      companyName: "Adobe",
      datePosted: "9 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Noida, India",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              logo={elem.brandLogo}
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
