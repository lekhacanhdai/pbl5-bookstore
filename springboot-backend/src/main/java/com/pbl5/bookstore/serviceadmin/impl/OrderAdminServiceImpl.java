package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.dto.ChartData;
import com.pbl5.bookstore.dto.OrderData;
import com.pbl5.bookstore.dto.OrderDetailData;
import com.pbl5.bookstore.repository.OrderRepository;
import com.pbl5.bookstore.serviceadmin.OrderAdminService;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderAdminServiceImpl implements OrderAdminService {

    private final OrderRepository orderRepository;

    @Override
    public List<OrderData> getAllOrder() {
        return orderRepository.getAllOrder();
    }

    @Override
    public List<OrderDetailData> getOrderDetailById(long id) {
        return orderRepository.getOrderDetailById(id);
    }

    @Override
    public List<OrderData> getLimit5Order() {
        Pageable topFive = PageRequest.of(0, 5);
        return orderRepository.getLimitOrder(topFive);
    }

    @Override
    public List<ChartData> getChartData(Boolean status, String year) {
        Date date = new Date();
        LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        int currentMonth = localDate.getMonthValue();

        Map<String, String> monthMap = new HashMap<>();
        monthMap.put("01", "January");
        monthMap.put("02", "February");
        monthMap.put("03", "March");
        monthMap.put("04", "April");
        monthMap.put("05", "May");
        monthMap.put("06", "June");
        monthMap.put("07", "July");
        monthMap.put("08", "August");
        monthMap.put("09", "September");
        monthMap.put("10", "October");
        monthMap.put("11", "November");
        monthMap.put("12", "December");


//        List<String> month = new ArrayList<>("1","2","3","4","5","6","7","8","9","10","11","12");
        List<ChartData> listChartData1 = orderRepository.getChartData(status);

        List<String> listMonth = Arrays.asList("01", "02", "03", "04","05","06","07","08","09","10","11","12");

        List<ChartData> listChartData = listChartData1.stream().filter(chartData -> Integer.parseInt(chartData.getYear()) >= Integer.parseInt(year) -1 )
                .collect(Collectors.toList());

        List<String> monthN1 = listChartData.stream()
                .filter( chartData -> chartData.getYear().equals(year))
                .map(ChartData::getMonth)
                .collect(Collectors.toList());
        List<String> monthN2 = listChartData.stream()
                .filter( chartData -> chartData.getYear().equals(String.valueOf(Integer.parseInt(year) - 1)))
                .map(ChartData::getMonth)
                .collect(Collectors.toList());

        List<String> listMonth1 = listMonth.subList(0,currentMonth);
        List<String> listMonth2 = listMonth.subList(currentMonth, listMonth.size());

        for (String month : listMonth1){
            if (!monthN1.contains(month)){
                listChartData.add(new ChartData(year, month, 0));
            }
        }
        for (String month : listMonth2){
            if (!monthN2.contains(month)){
                listChartData.add(new ChartData(String.valueOf(Integer.parseInt(year) - 1), month, 0));
            }
        }

        Comparator<ChartData> myComparator = Comparator.comparing(ChartData::getYear)
                .thenComparing(ChartData::getMonth);


        return listChartData.stream().sorted(myComparator).collect(Collectors.toList())
                .stream()
                .map(a -> new ChartData(a.getYear(), monthMap.get(a.getMonth()), a.getRevenueTotal()))
                .collect(Collectors.toList());
    }

    @Override
    public int getOrderNumber() {
        return orderRepository.getOrderNumber();
    }

    @Override
    public int getRevenueTotal() {
        return orderRepository.getRevenueTotal();
    }
    
}
