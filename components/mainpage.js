import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Lottie from 'react-lottie-player'
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import {useRouter} from 'next/router';

export default function Mainpage() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/projects');
    };
    return (
        <>
            <Grid container spacing={10}>
                <Grid size={5}>
                    <div className={styles.introduce}>
                        <h2 style={{fontSize:'45px'}}>안녕하세요!</h2>
                        <p>안녕하세요 제 이름은 민도희입니다. 저는 충주에서 태어났고 18살입니다. 제가 다니는 학교는 충주상업고등학교이며 저는 지금 2학년5반5번입니다. 저의 취미로는 영상 시청, 게임 플레이, 야구 보기입니다.</p>
                        <Button variant="contained" onClick={handleClick}>프로젝트 보러가기</Button>
                    </div>
                </Grid>
                <Grid size={7}>
                    <div>
                        <Lottie
                            loop
                            animationData={lottiejson}
                            play
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}