import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'ac7f90280dmsh55e576249882c30p114149jsneb6beb8de4a2'
}
const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoApiHeaders})


export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        })
    })
})

export const{useGetCryptosQuery,useGetExchangesQuery}=cryptoApi