import React, { useEffect, useState } from 'react'
import { getCaller } from '../../../services/api';
import linux from '../../../assets/images/linux.png'
import window from '../../../assets/images/window.png'
import '../platform/platformConfig.css'
import '../configurationManageSupport/manageService.css'
import { GiCheckMark } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom';

const PlatformConfiguration = () => {
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)
    const [activeIndex, setActiveIndex] = useState('linux')
    const [platformData, setPlatformData] = useState([])
    const [selectedCards, setSelectedCards] = useState({});
    const [manageSelectedCard, setManageSelectedCard] = useState(0);
    const [manageServiceData, setManageServiceData] = useState([])
    const [newManageData, setNewManageData] = useState({})
    const [selectElement, setSelectElement] = useState(0);

    const getPlatformData = async (i) => {
        const res = await getCaller('findallconfiguration')
        setPlatformData(res?.data)
    }
    useEffect(() => {
        getPlatformData()

    }, [])

    useEffect(() => {
        getManageServiceData()
    }, [])
    const getManageServiceData = async (i) => {
        const res = await getCaller('findallmanageservices')
        setManageServiceData(res?.data)
    }
    const handleCardClick = (cardIndex, cardItem) => {
        setSelectElement(cardIndex)
        setSelectedCards(cardItem)
    };

    const handleManageCardClick = (mIndex, mData) => {
        setManageSelectedCard(mIndex)
        setNewManageData(mData)
    };
    // const handleFormSubmit = (e) => {
    //   e.preventDefault();
    //   if (selectedCard) {
    //     onCardSelect(selectedCard);
    //   }
    // };
    const filterData = () => {
        if (activeIndex === 'linux') {
            return platformData?.filter(item => item.os === activeIndex);
        } else {
            return platformData?.filter(item => item.os === activeIndex);
        }
    };
    const handleSubmitData = () => {
        console.log(selectedCards)
        console.log(newManageData)
        navigate('/platformConfiguration', {
            state: {
                planData: selectedCards
            }
        })
    }
    return (
        <section className=''>
            <div className="tab-container">
                <div className="">
                    <h1 style={{ color: "black" }}>AWS Hosting </h1>
                    <div className="platform-tab">
                        <div className={`platform-tab-content ${activeIndex === 'linux' ? 'link-active' : ''}`} onClick={() => setActiveIndex('linux')}>
                            <img src={linux} alt='' width={70} height={70} />
                            <div className="platform-name">
                                <p>(O.S)</p>
                                <p>Linux</p>
                            </div>
                        </div>
                        <div id='window' className={`platform-tab-content ${activeIndex === 'windows' ? 'link-active' : ''}`} onClick={() => setActiveIndex('windows')}>
                            <img src={window} alt='' width={70} height={70} />
                            <div className="platform-name">
                                <p>(O.S)</p>
                                <p>Windows</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-head">
                        <div className={`link-tab ${index === 0 ? 'link-active' : ''}`} onClick={() => setIndex(0)}> <p>Monthly</p> </div>
                        <div className={`link-tab ${index === 1 ? 'link-active' : ''}`} onClick={() => setIndex(1)}> <p>Quarterly</p> </div>
                        <div className={`link-tab ${index === 2 ? 'link-active' : ''}`} onClick={() => setIndex(2)}> <p>Yearly</p> </div>
                    </div>
                </div>
            </div>
            <div className="ticket-card-container">
                {filterData()?.map((cardData, i) => (

                    <div className={`pricing-table gprice-single ${selectElement === i ? "conf-card-active" : ""}`} key={i} onClick={() => handleCardClick(i, cardData)}>
                        <div className="head">
                         
                            <h4 className="title">{cardData.plan}</h4>
                        </div>
                        <div className="content">
                            <div className="price">
                                <p>Rs.{index === 0 ? cardData.cost_Monthly : '' || index === 1 ? cardData.cost_Quarterly : "" || index === 2 ? cardData.cost_yearly : ''}</p>

                            </div>
                            <ul>
                                <li>< GiCheckMark style={{ color: "#006cff" }} />{cardData.vCPU}CPU Core</li>
                                <li>< GiCheckMark style={{ color: "#006cff" }} />{cardData.ram}RAM</li>
                                <li>< GiCheckMark style={{ color: "#006cff" }} />{cardData.storage}SSD RAID 10</li>
                                <li>< GiCheckMark style={{ color: "#006cff" }} /> {index === 0 ? 'PER MONTH' : '' || index === 1 ? '6 MONTH' : "" || index === 2 ? 'PER YEAR' : ''} </li>
                                <li>< GiCheckMark style={{ color: "#006cff" }} /> {cardData.bandwidth}bandwidth</li>

                            </ul>
                            <div className="sign-up">
                <button type='button' className="btn bordered radius" > {selectElement === i ? 'Selected ✓' : 'Select Plan'}</button>
            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="cloud-support-container">
                <h1 style={{ color: "black" }}>Cloudstok  Next-Gen Manage Support</h1>
                <p>
                    Please select the package which suites you the most.we provide best in the industry cloud manage services
                    to our customers irrespective of the packages that will choose.
                </p>
                
                <div className="support-row">
                    {
                        manageServiceData?.map((item, i) => (
                            <div className={`card ${manageSelectedCard===i?"active-m-card":""}`} onClick={() => handleManageCardClick(i, item)}>
                            <div className="card__info">
                              {/* <h2 className='card__name'>FREE</h2> */}
                              <p className='heading'>{item.heading}</p>
                              <p className='card__price' style={{color:"black"}}>$49.99 <span className='card__priceSpan'>/month</span></p>
                               <p className='select'>{manageSelectedCard === i ? 'Selected ✓' : 'Select Plan'}</p>
                            </div>
                            <div className='card__content' style={{color:"blue"}}>
                              <div className='card__rows'>
                                <p className='card__row'>{item.bandwidth}</p>
                                <p className='card__row'>{item.storage}</p>
                                <p className='card__row'>{item.accounts}</p>
                                <p className='card__row'>{item.host}</p>
                                <p className='card__row'>{item.support}</p>
                              </div>
                             <div className="read-more-btn">
                             <button className='button' style={{background:"black"}} onClick={()=>navigate('/cloudManage')} >Read More</button>
                             </div>
                            </div>  
                          </div>
                        
                        ))
                    }
                </div>
            </div>
            <div className="purschase-btn-container">
                <button className='button' onClick={handleSubmitData}>Purchase</button>
            </div>
        </section>
    )
}

export default PlatformConfiguration