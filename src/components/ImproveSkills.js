const ImproveSkills = () => {

    const lists = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/image/gallery/img_10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve your cooking skills</h1>
        {
            lists.map((list,index) => (
                <p className="skill-item" key={index}>{list}</p>
            ))
        }
        <button className="btn">Signup now</button>
      </div>
    </div>
  );
};

export default ImproveSkills;
