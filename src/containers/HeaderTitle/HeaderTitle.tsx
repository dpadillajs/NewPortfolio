import React from 'react';

interface Props {
    titleOne: string,
    titleTwo: string,
    colorTwo?: string
}

export const HeaderTitle: React.FC<Props> = ({ titleOne, titleTwo, colorTwo }) => {
    const styles = () => ({
        headerTitleDiv: {
            textAlign: 'center' as 'center'
        },
        headerTitleSpan: {
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
        <div style={styles().headerTitleDiv}>
            <span style={styles().headerTitleSpan.one}>
                <span>{titleOne}</span>
                <span style={styles().headerTitleSpan.two}>{titleTwo}()</span>
            </span>
        </div>
    );
}
