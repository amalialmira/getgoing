import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2F1724200976015?alt=media&token=50786cb5-41e5-4353-96ac-c8558febc60c",
        name:"Nuel",
        city:"Paris, Prancis"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f",
        name:"Agus",
        city:"Roma, Italia"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FStella%20Runia?alt=media&token=1b69c0d0-80d3-4947-8788-a421e2f00774",
        name:"Stella",
        city:"Zurich, Swiss"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2FPHOTO-2018-09-23-16-32-02.jpg?alt=media&token=4ea14f69-6ea5-4c9b-83ac-2e8b3ca107d6",
        name:"Januar",
        city:"Munich, Jerman"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FIMG_1904.jpeg?alt=media&token=ee183e63-aa7a-452d-99dd-840c885486f6",
        name:"Gio",
        city:"Amsterdam, Belanda"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FE5E046B0-9750-458D-BDCF-C9FE6EF2A763.JPG?alt=media&token=2fb6aae5-b8e2-4437-b592-57b19e022499",
        name:"Hanifa",
        city:"London, Inggris"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2Ff26bcdf5-7032-4ae2-8f34-85238ded215e?alt=media&token=7bffe4e4-171e-4f56-905b-8a15d38d85ee",
        name:"Nada",
        city:"Wina, Austria"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2F13210289-75ed-4ac4-8742-873d47ee7137?alt=media&token=902fb4f5-7237-4a88-adc1-fd68985ea63b",
        name:"Maya",
        city:"Liverpool, Inggris"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FWhatsApp%20Image%202023-05-08%20at%2010.54.49.jpg?alt=media&token=0c5cbbac-b60d-4175-8c51-89a8370308dd",
        name:"Nabilla",
        city:"Paris, Prancis"
    },
    {
        imgUrl:"https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2Fc4567268-dbd2-4489-bf6a-ed16f6c065fe?alt=media&token=9420fcec-9a1b-4511-b8b5-44acc07dc020",
        name:"Ifa",
        city:"Wina, Austria"
    }
]

const PeopleCard = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    }

    return(
        <div style={{fontFamily: "Poppins"}} className="px-20 py-5 m-auto">
            <div className="mt-2 gap-10 slider-container mb-10">
            <Slider {...settings}>
                {data.map((people, idx) => (
                    <div key={idx} className="mb-5 pt-5">
                        <img
                        src={people.imgUrl}
                        className="w-52 h-52 object-cover rounded-2xl mb-2 cursor-pointer hover:-translate-y-2 transition-all relative"
                        />
                        <p className="mb-2 font-bold">
                            {people.name}
                        </p>
                        <p className="font-light">
                            {people.city}
                        </p>
                    </div>
                ))}
            </Slider>
            </div>

        </div>
    )
}

export default PeopleCard