import Link from 'next/link'
import Select from 'react-select'
import { MENU_ITEM } from '../../config'
import Result from './Result'

const studentOptions = [
    { value: 'sv1', label: 'SV001' },
    { value: 'sv2', label: 'SV002' },
    { value: 'sv3', label: 'SV003' }
]
const subjectOptions = [
    { value: 'cntt', label: 'Công nghệ thông tin' },
    { value: 'qtkd', label: 'Quản trị kinh doanh' },
    { value: 'ck', label: 'Cơ khí' }
]
export default function Lookup() {
    const onLookupClick = () => {}

    return (
        <>
            <div>
                <section className='banner'>
                    <div className='banner-img'>
                        <img src='/images/banner/courses-banner.jpg' />
                    </div>
                    <div className='page-title'>
                        <div className='container'>
                            <h1>Tra cứu thông tin</h1>
                        </div>
                    </div>
                </section>
                <section className='breadcrumb white-bg'>
                    <div className='container'>
                        <ul>
                            <li>
                                <Link href={MENU_ITEM.HOME}>
                                    <a>Trang chủ</a>
                                </Link>
                            </li>
                            <li>
                                <a>Tra cứu</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='sub-title'>
                            <div className='right-select'>
                                <Select options={studentOptions} placeholder='Mã Sinh viên' />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='sub-title'>
                            <div className='right-select'>
                                <Select options={subjectOptions} placeholder='Chọn Môn học' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row' style={{ marginTop: 5, marginBottom: 5 }}>
                    <div className='col-sm-4'>
                        <button className='btn' onClick={onLookupClick}>
                            Tra cứu
                        </button>
                    </div>
                </div>
                <div className='row' style={{ marginTop: 5, marginBottom: 5 }}>
                    <div className='col-sm-12'>
                        <Result />
                    </div>
                </div>
            </div>
        </>
    )
}
