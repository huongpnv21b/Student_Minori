import Link from 'next/link'
import { MENU_ITEM } from '../../config'

export default function Header() {
    if (typeof window === 'undefined') return <div />
    return (
        <header id='header' className='fiexd'>
            <div className='container'>
                <nav id='nav-main'>
                    <div className='navbar navbar-inverse'>
                        <div className='navbar-header'>
                            <Link href={MENU_ITEM.HOME}>
                                <a className='navbar-brand'>
                                    <img src='/images/logo.png' />
                                </a>
                            </Link>
                            <button
                                type='button'
                                className='navbar-toggle'
                                data-toggle='collapse'
                                data-target='.navbar-collapse'>
                                <span className='icon-bar' />
                                <span className='icon-bar' />
                                <span className='icon-bar' />
                            </button>
                        </div>
                        <div className='navbar-collapse collapse'>
                            <ul className='nav navbar-nav'>
                                <li className={getClassName(location.pathname === MENU_ITEM.HOME)}>
                                    <Link href={MENU_ITEM.HOME}>
                                        <a>Trang chủ</a>
                                    </Link>
                                </li>
                                
                                <li className={getClassName(location.pathname.includes(MENU_ITEM.SIGN_UP))}>
                                    <Link href={MENU_ITEM.SIGN_UP}>
                                        <a>Đăng ký học</a>
                                    </Link>
                                </li>
                                <li className={getClassName(location.pathname.includes(MENU_ITEM.LOOK_UP))}>
                                    <a>Tra cứu</a>
                                    <ul>
                                        <li>
                                            <Link href={MENU_ITEM.LOOK_UP_STUDY_SCORE}>
                                                <a>Tra cứu điểm</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={MENU_ITEM.LOOK_UP_LEARNING_OUTCOMES}>
                                                <a>Tra cứu kết quả học tập</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={getClassName(location.pathname.includes(MENU_ITEM.QUIZ))}>
                                    <a>Trắc nghiệm</a>
                                    <ul>
                                        <li>
                                            <Link href={MENU_ITEM.QUIZ_INTRO}>
                                                <a>Làm trắc nghiệm</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={MENU_ITEM.QUIZ_RESULT}>
                                                <a>Kết quả trắc nghiệm</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={getClassName(location.pathname.includes(MENU_ITEM.FORUM))}>
                                    <Link href={MENU_ITEM.FORUM}>
                                        <a>Diễn đàn</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const getClassName = (active: boolean) => {
    return active ? 'sub-menu active' : 'sub-menu'
}
