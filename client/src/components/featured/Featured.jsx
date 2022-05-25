import useFetch from '../../hooks/useFetch';
import './Featured.css';

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Can Tho,Vinh long,Hau Giang");

    return (
        <div className='featured'>
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="featuredItem">
                        <img src="https://www.lidolakeresort.com/wp-content/uploads/2020/05/PoolArea-500x500.jpg"
                            alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Can Tho</h1>
                            <h2>{data[0]} proerties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="http://silkpathhotel.com/media/ckfinder/images/Menu/HOTEL_HANOI_-_Menu.jpg"
                            alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Vinh Long</h1>
                            <h2>{data[1]} proerties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://vcdn-dulich.vnecdn.net/2019/10/14/945374646-w500-3614-1571048783.png"
                            alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Hau Giang</h1>
                            <h2>{data[2]} proerties</h2>
                        </div>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Featured