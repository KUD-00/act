import { Swiper } from 'antd-mobile'

const bannerList = ['/image/16_1657859496.png', '/image/16_1657859849.JPG', '/image/18_1677457331.png'];
const items = bannerList.map((item, index) => (
    <Swiper.Item key={index}>
        <img
            src={item}
            alt=''
        />
    </Swiper.Item>
))

const OverviewBanner = () => {
    return (
        <div className='image-container'>
            <Swiper slideSize={80} trackOffset={10} stuckAtBoundary={false} autoplay loop>
                {items}
            </Swiper>
        </div>
    )
}

export default OverviewBanner;
