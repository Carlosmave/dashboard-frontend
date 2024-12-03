import { Card, CardHeader, Divider } from '@material-ui/core';
import { IMainCard } from '../../interfaces';

export const MainCard = ({ title, children }: IMainCard) => {
        return (
            <Card
                sx={{
                    border: 'solid',
                    borderColor: '#90caf9',
                    ':hover': {
                        boxShadow: 'inherit'
                    },
                }}
            >
                <CardHeader title={title}  />
                <Divider />
                {children}
            </Card>
        );
    }
