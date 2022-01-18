//@ts-check
import {useState} from 'react'
import Router, {useRouter} from 'next/router';

export default function tU(){
    const [nim, setNim]= useState('');
    const [nama, setNama]= useState('');
    const [alamat, setAlamat]= useState('');
    const [password, setPassword]= useState('');
    /*const [foto, setFoto] = useState(null);
    const [SelectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');

    const onSelectImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
            }
            const _file = e.target.files[0];
            const reader = new FileReader()
            reader.onload = function(){
            setFile(_file);
            setFoto(reader.result);
            }
            reader.readAsDataURL(_file)
          
    }*/
   async function submitHandler(e){
       e.preventDefault()
       try{
           const res = await fetch('http://localhost:3000/api/tambahuser',{
               method: 'POST',
               headers: {'Content-Type': 'application/json', },
                body : JSON.stringify({
                    nim, 
                    nama, 
                    alamat, 
                    password
                    
                }
                ),
           })
           const json = await res.json()
           if(!res.ok) throw Error(json.message)
            alert("Wes melbu Bos")
            Router.push('/admin/datauser')
       }catch (e){
        throw Error(e.message)
   }
}
    return(
        <div>
                 <div className='container mt-4'>
                    <form className='w-50 mx-auto' onSubmit={submitHandler}>
                        <h3>Tambah User</h3>
                        {/* <div className="text-center">
                            <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={foto} alt="Pilih Foto"
                                style = {{background : "gray",
                                        width:"100px", height:"100px"}} />
                            </label>
                            <input 
                            id = "uploadGambar"
                            type="file"
                            style={{display : "none"}}
                            onChange = {onSelectImage} />
                            
                        </div> */}
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='nim' type='text' required placeholder='Nim'
                                    value = {nim} onChange ={(e) => setNim(e.target.value)} />

                                <label htmlFor='nim'>NIM</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='nama' type='text' required placeholder='Nama'
                                    value = {nama} onChange ={(e) => setNama(e.target.value)} />

                                <label htmlFor='nama'>Nama</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='alamat' type='text' required placeholder='Alamat'
                                    value = {alamat} onChange ={(e) => setAlamat(e.target.value)} />

                                <label htmlFor='nim'>ALAMAT</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='nim' type='text' required placeholder='Password'
                                    value = {password} onChange ={(e) => setPassword(e.target.value)} />

                                <label htmlFor='nim'>Password</label>
                        </div>
                                <div className='d-flex-row-reverse'>
                                <input type='submit'  value='simpan' className='btn btn-primary' />
                                </div>
                    </form>
                
            </div>
        </div>
    )
}