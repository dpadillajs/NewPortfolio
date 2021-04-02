import React from 'react';

interface Props {
    titleOne: string,
    titleTwo: string,
    colorTwo?: string
}

export const HeaderTitle: React.FC<Props> = ({ titleOne, titleTwo, colorTwo }) => {
    const styles = () => ({
        divStyle: {
            textAlign: 'center' as 'center'
        },
        spanStyle: {
            one: {
                fontSize: 35,
                fontWeight: 'lighter' as 'lighter'
            },
            two: {
                color: colorTwo ?? '#a41d30',
                fontWeight: 900
            }
        }
    })

    return (
        <div style={styles().divStyle}>
            <span className="spanStyle" style={styles().spanStyle.one}>
                <span>{titleOne}</span>
                <span style={styles().spanStyle.two}>{titleTwo}( )</span>
            </span>
        </div>
    );
}
