import React from 'react'
// import Machine from '../assets/Images/Machine.png'
import Star from '../assets/Images/icons/Star.png'
import StarFilled from '../assets/Images/icons/StarFilled.png'
import Heart from '../assets/Images/icons/Heart.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const ItemCard = (props) => {
    const { IsSold, ItemImg } = props.data;
    return (
        <div className='Card'>
            <div className='HoverOnCard'>
                <div className='HoverOnCardR1'>
                    <div className='discountbox'>35%</div>
                    <div className='HeartHolder'>
                        <img src={Heart} alt="" />
                    </div>
                </div>
                <div className='HoverOnCardR2'>
                    <div className='BtnHolderCardHover'>
                        <div className='BtnHolderCardHoverInner'>
                            Detail
                        </div>
                    </div>
                    <div className='BtnHolderCardHover'>
                        <div className='BtnHolderCardHoverInner'>
                            Add to Cart
                        </div>
                    </div>
                </div>
                <div className='HoverOnCardR3'>
                    <div className='cardHoverCartBtn'>
                        <RemoveIcon />
                    </div>
                    <div className='cardHoverQuantity'>1</div>
                    <div className='cardHoverCartBtn'>
                        <AddIcon />
                    </div>
                </div>
            </div>
            <div className={`SoldTag ${IsSold ? 'show' : ''}`}>Sold Out</div>
            <div className="CardInner">
                <div className='CardImgHolder'>
                    <img src={ItemImg} alt="" />
                </div>
                <div className='ItemTitle'>Machine</div>
                <div className='ItemDesc'>Flavour so strong, it’ll awaken all five of your senses!</div>
            </div>
            <div className='CardRating'>
                <div className='starHolder'>
                    <img src={StarFilled} alt="" />
                </div>
                <div className='starHolder'>
                    <img src={StarFilled} alt="" />
                </div>
                <div className='starHolder'>
                    <img src={StarFilled} alt="" />
                </div>
                <div className='starHolder'>
                    <img src={StarFilled} alt="" />
                </div>
                <div className='starHolder'>
                    <img src={Star} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ItemCard;
