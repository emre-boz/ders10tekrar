import Header from "./components/Header";
import Footer from "./components/Footer";

function iletisim(){
    return <>
    <Header />
    <section>
    <h1>İletişim</h1>
    <p>Aşağıdaki iletişim formu ile bize yazabilirsiniz.</p>
    <form action="">
        <div>
            <label htmlFor="">Ad Soyad</label>
            <input type="text" /><br />
        </div>
        <div>
            <label htmlFor="">eposta</label>
            <input type="text" /><br />
        </div>
        <div>
            <label htmlFor="">Mesajınız</label>
            <textarea></textarea>
        </div>
        <button type="submit">Gönder</button>
    </form>
    </section>
    <Footer />
    </>
}

export default iletisim;