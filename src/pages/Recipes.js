import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";


const Recipes = () => {
  const searches = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "biriyani",
    "salad",
    "ice cream",
    "lasagne",
    "pudding",
    "soup",
  ];
  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/image/gallery/img_1.jpg",
        authorImg: "/image/top-chiefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/image/gallery/img_4.jpg",
        authorImg: "/image/top-chiefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/image/gallery/img_5.jpg",
        authorImg: "/image/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/image/gallery/img_6.jpg",
        authorImg: "/image/top-chiefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/image/gallery/img_10.jpg",
        authorImg: "/image/top-chiefs/img_6.jpg",
    },
    {
        title: "Chicken Pan Pizza",
        image: "/image/gallery/img_1.jpg",
        authorImg: "/image/top-chiefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/image/gallery/img_4.jpg",
        authorImg: "/image/top-chiefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/image/gallery/img_5.jpg",
        authorImg: "/image/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/image/gallery/img_6.jpg",
        authorImg: "/image/top-chiefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/image/gallery/img_10.jpg",
        authorImg: "/image/top-chiefs/img_6.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/image/gallery/img_5.jpg",
        authorImg: "/image/top-chiefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/image/gallery/img_6.jpg",
        authorImg: "/image/top-chiefs/img_5.jpg",
    }
  ].sort(()=> Math.random() - 0.5)

  return (
    <div>
        < PreviousSearches searches = {searches}/>

        <div className="recipe-container">
            {recipes.map((item,index)=>(
                <RecipeCard recipe={item} key={index}/>
            ))}
        </div>
    </div>
  );
};

export default Recipes;
