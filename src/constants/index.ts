const categories:number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 29, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
export const ChartOptions = (title: string) => {
     const options = {
       chart: {
         stacked: false,
         height: 350,
         zoom: {
           enabled: false,
         },
       },
       dataLabels: {
         enabled: false,
       },
       markers: {
         size: 0,
       },
       title: {
         text: title,
         style: {
           fontSize: '14px',
           fontWeight: 'bold',
           fontFamily: undefined,
           color: '#fff',
         },
       },
       xaxis: {
         categories: categories,
       },
       tooltip: {
         theme: 'dark',
       },
     };
  
  return options
}
