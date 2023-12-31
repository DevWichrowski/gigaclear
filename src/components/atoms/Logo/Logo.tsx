import {logos} from '../../../../public/assets/logos'
import styles from './Logo.module.sass'

export type IconType = 'gicon' | 'core' | 'strapline'

export interface ILogoProps extends React.SVGProps<SVGSVGElement> {
    type: IconType
}

export const Logo = (props: ILogoProps) => {
    const {type} = props

    return (
        <div className={styles.Logo}>
            <svg
                data-name="GigaclerLogo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={logos[type].viewBox}
            >
                {logos[type].paths.map((p, i) => <path key={i} d={p} className='fill-white' />)}
            </svg>
        </div>
    )
}


