import Header from '../HeaderSection/Header';
import React , {useEffect, useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme';
import MainBlogForm from "./MainPhotoForm"
import Footer from "./Footer";
import FormHeader from "./FormHeader";
import NoticeDialog from "./LegalNoticePopups/NoticeDialog"; //TODO: delete or update this section ...
import { AppBar, Toolbar, Typography} from "@material-ui/core";
import LegalNoticePopup from "./LegalNoticePopups/LegalNoticePopup";

const PhotoFormPage = props =>{
    const [loadState, setLoadState] = useState(false);
    const [loadMessage, setLoadMessage] = useState('Creando tu espacio seguro ...')
    const [loadHeader, setLoadHeader] = useState('Cargando')
    const [loadButtonText, setLoadButtonText] = useState('')
    const [loadButtonLink, setLoadButtonLink] = useState('/login')
        return (
          <ThemeProvider theme={theme}>

            <div className="homepage-3 inner inner-pages">
                <div className="main">
                <Header 
                    imageData={"/img/logo-white.png"} 
                    setLoadState={setLoadState} 
                    loadState ={loadState}
                    loadMessage =  {loadMessage}
                    loadHeader = {loadHeader} 
                    loadButtonText={loadButtonText}
                    loadButtonLink = {loadButtonLink
                }/>                      
                <section id="home" className="section welcome-area bg-overlay h-110vh overflow-hidden ptb_100">
                        <FormHeader />
                        <MainBlogForm />
                        <Footer />
                      </section>
                </div>
            </div>
            <AppBar position="static" elevation={0} component="footer" color="default">
                <Toolbar style={{ justifyContent: "center" }}>
                    <Typography variant="caption">©2020</Typography> <NoticeDialog  separator="&nbsp;᛫" />
                </Toolbar>
            </AppBar>
        <LegalNoticePopup></LegalNoticePopup>

          </ThemeProvider>

        );
}

export default PhotoFormPage;