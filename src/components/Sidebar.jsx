import React, { useState } from 'react'
import avatarImage from '../assets/images/my-avatar2.png'
import './Sidebar.css'

const contactItems = [
    {
        id: 1,
        iconName: 'mail-outline',
        title: 'Email',
        link: 'vishal.thapaliya@gmail.com',
        href: 'mailto:vishal.thapaliya@gmail.com'
    },
    {
        id: 2,
        iconName: 'location-outline',
        title: 'Location',
        link: 'Grenoble, France'
    },

]

const socialItems = [
    {
        id: 1,
        iconName: 'logo-github',
        link: 'https://github.com/VishalThapaliya',
        label: 'GitHub'
    },
    {
        id: 2,
        iconName: 'logo-linkedin',
        link: 'https://www.linkedin.com/in/bishal-thapaliya-571643109/',
        label: 'LinkedIn'
    },
    {
        id: 3,
        iconName: 'logo-twitter',
        link: 'https://x.com/BishalThapaliy5',
        label: 'X'
    },
    {
        id: 4,
        iconName: 'logo-xing',
        link: 'https://www.xing.com/profile/Bishal_Thapaliya',
        label: 'Xing'
    },

]

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSideBar = () => setIsSidebarOpen(prev => !prev);

    return (
        <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={avatarImage} alt="Bishal Thapaliya" width={80}/>
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Bishal Thapaliya">Bishal Thapaliya</h1>
                    <p className="title">QA Engineer | Frontend Quality & Test Automation</p>
                </div>

                <button 
                    type="button"
                    className="info_more-btn" 
                    onClick={toggleSideBar}
                    aria-expanded={isSidebarOpen}
                    aria-label={isSidebarOpen ? 'Hide contacts' : 'Show contacts'}
                >
                    <span>{isSidebarOpen ? 'Hide contacts' : 'Show contacts'}</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>

            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    {contactItems.map(contact => (
                        <li className="contact-item" key={contact.id}>
                            <div className="icon-box" aria-hidden="true">
                                <ion-icon name={contact.iconName}></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">{contact.title}</p>
                                {contact.href ? (
                                    <a className="contact-link" href={contact.href}>{contact.link}</a>
                                ) : (
                                    <span className="contact-link">{contact.link}</span>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    {socialItems.map(item => (
                        <li className="social-item" key={item.id}>
                            <a 
                                href={item.link} 
                                className="social-link" 
                                aria-label={item.label} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <ion-icon name={item.iconName} aria-hidden="true"></ion-icon>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar