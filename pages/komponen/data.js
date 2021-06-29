import Iss from './propdata/propdata'
export default function tabel (){
    const datgam = [{urlgam : 'https://p.ipricegroup.com/uploaded_cbab94b165783fbf63bc824ed8a3fc43.jpg?position=3',
                    nama :<center>Asus Tuf FX505DY-R5698T</center>,
                    ktg : 'AMD Ryzen 5 Vga Vega 5 SSD: 512 GB / RAM: 8 GB 15,6 inches'},

                 

                    {urlgam : 'https://p.ipricegroup.com/uploaded_04b90bfdeb0f85fe5b037b2234dca300.jpg?position=5',
                     nama :<center>Apple MacBook Air 13</center>   ,
                    ktg : 'Apple M1 chip SSD: 256 GB / RAM: 8 GB 13 inches'},

                    {urlgam : 'https://p.ipricegroup.com/uploaded_f74ad67165a5cbbe872867bddee30326.jpg?position=8',
                   nama :<center>Lenovo Ideapad Slim 3</center> , 
                    ktg : 'Intel® Core™ i3-1005G1  SSD: 512 GB / RAM: 8 GB 14 inches'},
                    
                    {urlgam : 'https://p-id.ipricegroup.com/uploaded_ddbe098eae83b4c86f57cdc098d9ae70.jpg?position=2',
                    nama :<center>ASUS VivoBook 14 A412FA</center> , 
                     ktg : 'Intel® Core™ i3-8145U SSD: 256 GB / RAM: 4 GB 14 inches'},

                     {urlgam : 'https://p-id.ipricegroup.com/uploaded_48719a7da8cd69d2eddc083393cd77ac.jpg?position=11',
                     nama :<center>Asus ZenBook Duo UX481</center> , 
                      ktg : 'Intel Core i5-10210U NVIDIA MX250 2GB SSD: 512 GB / RAM: 8 GB 14 inches'},
                      {urlgam : 'https://p-id.ipricegroup.com/uploaded_ac2c501b3107a945d207d94c5cd550c3.jpg?position=19',
                      nama :<center>Acer Aspire 3 A315-41</center> , 
                       ktg : 'AMD® Ryzen™ 3 AMD Radeon Vega 3 Graphics HDD: 1TB / RAM: 4 GB 14 inches'},
                       {urlgam : 'https://p-id.ipricegroup.com/uploaded_85b5b60fa64fc0a98e0acb5c99beda88.jpg?position=39',
                       nama :<center>ASUS X550VX</center> , 
                        ktg : 'Intel Core i5-6300HQ NVIDIA GeForce GTX 950M (2GB GDDR5) HDD: 1TB / RAM: 4 GB 14 inches'},
                        {urlgam : 'https://p.ipricegroup.com/uploaded_cbab94b165783fbf63bc824ed8a3fc43.jpg?position=3',
                        nama :<center>Apple Macbook Air M1</center> , 
                         ktg : 'Apple M1 chip SSD: 256 GB / RAM: 8 GB 13 inches Graphic Card 7-core GPU'},
                         {urlgam : 'https://p-id.ipricegroup.com/uploaded_2429628504403b250796d61fc10fcde2.jpg?position=25',
                         nama :'tos' , 
                          ktg : 'masih'},
                          {urlgam : 'https://p.ipricegroup.com/uploaded_cbab94b165783fbf63bc824ed8a3fc43.jpg?position=3',
                          nama :'tos' , 
                           ktg : 'masih'},
                           {urlgam : 'https://p.ipricegroup.com/uploaded_cbab94b165783fbf63bc824ed8a3fc43.jpg?position=3',
                           nama :'tos' , 
                            ktg : 'masih'},
                            {urlgam : 'https://p.ipricegroup.com/uploaded_cbab94b165783fbf63bc824ed8a3fc43.jpg?position=3',
                            nama :'tos' , 
                             ktg : 'masih'}]
    return(
      
<div className="container py-4">

  
  <div className="row">
  {datgam.map((card,index) =>
  <div className="col-2 -lg-4 py-4" >
    <Iss urlgam={card.urlgam} 
    nama={card.nama}
        ktg={card.ktg}/>
        </div>)
  }
  </div>
 
  </div>


    )
}
