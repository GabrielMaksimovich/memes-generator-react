import React, {useState,useEffect} from 'react'


export default function  Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = useState([]);

    useEffect(() => {
        async function getMemes() {
            const res =  await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMeme(data.data.memes);
        }
        getMemes();

    }, []);



    function getImage() {
        const randomImgIndex = Math.floor(Math.random() * allMeme.length);
        const url = allMeme[randomImgIndex].url;
        setMeme(prevImg => ({
                ...prevImg,
                randomImage: url,
        }))
    }

    function handleChange(event) {
        const {name,value} = event.target;
        setMeme(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }
    return (
        <main className='main'>
            <div className='main__form form'>
                <input
                    type="text"
                    className='form__input'
                    placeholder="Top text"
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className='form__input'
                    placeholder="Bottom text"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className='form__btn '
                    onClick={getImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className='meme__img'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}