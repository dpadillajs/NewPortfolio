import React from 'react';
import './HeaderTitle.css';

interface Props {
    titleOne: string,
    titleTwo: string
}

export const HeaderTitle: React.FC<Props> = ({ titleOne, titleTwo }) => {
    const styles = () => {
        return ({
            divStyle: {
                textAlign: 'center' as 'center'
            },
            spanStyle: {
                one: {
                    position: 'relative' as 'relative',
                    fontSize: 35,
                    fontWeight: 'lighter' as 'lighter'
                },
                two: {
                    color: '#a41d30',
                    fontWeight: 900
                }
            }
        })
    }

    return (
        <div style={styles().divStyle}>
            <span className="spanStyle" style={styles().spanStyle.one}>
                <span>{titleOne}</span>
                &nbsp;
                <span style={styles().spanStyle.two}>{titleTwo}</span>
            </span>
        </div>
    );
}
