import ChefCard from "./ChefCard";

const ChefSection = () => {
    const chefs = [
        {
            name: "Juan Carlos",
            img: "/image/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/image/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/image/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/image/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/image/top-chiefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/image/top-chiefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]

    return ( 
        <div className="section chef-section">
           <h1 className="title">
                Our Top Chiefs
           </h1>
           <div className="chefs-container">
            {chefs.map((chef,index)=>(
                <ChefCard key={index} chef={chef}/>
            ))}
           </div>
        </div>
     );
}
 
export default ChefSection;