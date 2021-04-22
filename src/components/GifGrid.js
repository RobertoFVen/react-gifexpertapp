import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifts';

import GifGridItem from '../components/GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ( { category } ) => {

    // const [count, setCount] = useState(0)

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );


    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ])

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__flash"> { category } </h3>

            { loading && <p className="animate__animated animate__fadeInLeft">Loading</p>}


            <div className="card-grid">
                {
                    images.map( ( img ) => (
                            <GifGridItem
                                key = { img.id }
                                { ...img } />
                        ))
                }  

                {/* <h3> { count } </h3>
                <button onClick = { () => setCount( count + 1 ) } ></button> */}    
            </div>
        </>        
    )
}

export default GifGrid;
