import type { FC } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import { AppContainer } from '../components/app-container'
import { Dashboard } from '../pages/dashboard';
import { NotFound } from '../pages/not-found';

type RoutesProps = {

}

export const AppRoutes: FC<RoutesProps> = ({ }) => {
    return (
        <BrowserRouter>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppContainer>
        </BrowserRouter>
    )
}
