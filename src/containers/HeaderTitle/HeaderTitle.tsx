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
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'min(max(4vw, 27px), 50px)',
                fontWeight: 200
            },
            two: {
                color: colorTwo ?? '#a41d30',
                fontWeight: 700
            }
        }
    })

    return (
        <div style={styles().divStyle}>
            <span className="spanStyle" style={styles().spanStyle.one}>
                <span>{titleOne}</span>
                <span style={styles().spanStyle.two}>{titleTwo}()</span>
            </span>
        </div>
    );
}
