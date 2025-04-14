import React, { useState } from 'react'
import avatarImage from '../images/my-avatar.png'
import './Sidebar.css'

const contactItems = [
    {
        id: 1,
        iconName: 'mail-outline',
        title: 'Email',
        link: 'vishal.thapaliya@gmail.com'
    },
    {
        id: 2,
        iconName: 'phone-portrait-outline',
        title: 'Phone',
        link: '(+33) 07 68 31 94 27'
    },
    {
        id: 3,
        iconName: 'calendar-outline',
        title: 'Birthday',
        link: '19 September 1985'
    },
    {
        id: 4,
        iconName: 'location-outline',
        title: 'Location',
        link: 'Grenoble, France'
    },

]

const socialItems = [
    {
        id: 1,
        iconName: 'logo-github',
        link: 'https://github.com/VishalThapaliya'
    },
    {
        id: 2,
        iconName: 'logo-linkedin',
        link: 'https://www.linkedin.com/in/bishal-thapaliya-571643109/'
    },
    {
        id: 3,
        iconName: 'logo-twitter',
        link: 'https://x.com/BishalThapaliy5'
    },
    {
        id: 4,
        iconName: 'logo-xing',
        link: 'https://www.xing.com/profile/Bishal_Thapaliya/web_profiles?sc_o=navigation_profile&sc_o_PropActionOrigin=navigation_badge_no_badge'
    },

]

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSidebarOpen(prev => !prev);
    }

    return (
        <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={avatarImage} alt="Bishal Avatar" style={{ width: 80 }}/>
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Bishal Thapaliya">Bishal Thapaliya</h1>
                    <p className="title">Front-end Developer</p>
                </div>

                <button className="info_more-btn" onClick={toggleSideBar}>
                    <span>Show Contacts</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>

            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    { contactItems.map(contact => (
                        <li className="contact-item" key={contact.id}>
                            <div className="icon-box">
                                <ion-icon name={contact.iconName}></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">{contact.title}</p>
                                <span className="contact-link">{contact.link}</span>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    { socialItems.map(item => (
                        <li className="social-item" key={item.id}>
                            <a href={item.link} className="social-link">
                                <ion-icon name={item.iconName}></ion-icon>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar