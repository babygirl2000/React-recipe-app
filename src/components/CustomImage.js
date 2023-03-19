const CustomImage = ({src,pt}) => {

    const padding = {
        paddingTop: pt
    };
    return ( 
        <div className="custom-image" style={padding}>
            <img src={src} alt="hello" />
        </div>
     );
}
 
export default CustomImage;