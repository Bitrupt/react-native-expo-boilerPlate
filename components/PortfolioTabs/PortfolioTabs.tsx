import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageSourcePropType } from 'react-native';
import { Colors } from '@/constants/Colors';
import styles from './styles';
import TeslaIcon from '@/assets/logos/social/tesla.png';
import GoogleIcon from '@/assets/logos/social/google.png';
import NvidiaIcon from '@/assets/logos/social/nvidia.png';
import SkypeIcon from '@/assets/logos/social/skype.png';


interface Stock {
  symbol: string;
  name: string;
  amount: number;
  change: number;
  changePercent: number;
  icon:ImageSourcePropType;
}

interface Trade {
  symbol: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  date: string;
}

const PortfolioTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'trades'>('portfolio');

  const portfolioStocks: Stock[] = [
    { symbol: 'Tesla', name: 'TSLA', amount: 1000, change:0.94, changePercent: 5.4,icon:TeslaIcon },
    { symbol: 'Google', name: 'Google', amount: 5000, change: -0.73, changePercent: -1.4,icon:GoogleIcon},
    { symbol: 'Nvidia', name: 'Nvidia', amount: 250, change: 2.45, changePercent: 5.0,icon:NvidiaIcon},
    { symbol: 'Skype', name: 'Skp', amount: 630, change: 5.74, changePercent: 3.0,icon:SkypeIcon},
  ];

  const pastTrades: Trade[] = [
    { symbol: 'AAPL', type: 'buy', amount: 1500, price: 175.23, date: '2024-01-15' },
    { symbol: 'MSFT', type: 'sell', amount: 800, price: 415.89, date: '2024-01-14' },
    { symbol: 'TSLA', type: 'buy', amount: 2000, price: 245.67, date: '2024-01-13' },
  ];

  const renderPortfolioItem = (stock: Stock) => (
    <View key={stock.symbol} style={styles.listItem}>
      <Image source={stock.icon} style={styles.socialIcon} />
      <View style={styles.stockInfo}>
        <Text style={styles.stockSymbol}>{stock.symbol}</Text>
        <Text style={styles.stockName}>{stock.name}</Text>
      </View>
      <View style={styles.stockPricing}>
        <Text style={styles.stockAmount}>£{stock.amount.toLocaleString()}</Text>
        <Text style={[
          styles.stockChange,
          { color: stock.change >= 0 ? Colors.success : Colors.error }
        ]}>
          {/* {stock.change >= 0 ? '+' : ''}${Math.abs(stock.change).toFixed(2)} ({stock.changePercent}%) */}
          {stock.change >= 0 ? '+' : '-'}${Math.abs(stock.change).toFixed(2)} 
        </Text>
      </View>
    </View>
  );

  const renderTradeItem = (trade: Trade) => (
    <View key={`${trade.symbol}-${trade.date}`} style={styles.listItem}>
      <View style={styles.stockInfo}>
        <Text style={styles.stockSymbol}>{trade.symbol}</Text>
        <Text style={styles.stockName}>{trade.type.toUpperCase()} • {trade.date}</Text>
      </View>
      <View style={styles.stockPricing}>
        <Text style={styles.stockAmount}>${trade.amount.toLocaleString()}</Text>
        <Text style={styles.tradePrice}>${trade.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'portfolio' && styles.activeTab]}
          onPress={() => setActiveTab('portfolio')}
        >
          <Text style={[styles.tabText, activeTab === 'portfolio' && styles.activeTabText]}>
            My Portfolio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'trades' && styles.activeTab]}
          onPress={() => setActiveTab('trades')}
        >
          <Text style={[styles.tabText, activeTab === 'trades' && styles.activeTabText]}>
            Past Trades
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'portfolio' 
          ? portfolioStocks.map(renderPortfolioItem)
          : pastTrades.map(renderTradeItem)
        }
      </ScrollView>
    </View>
  );
};

export default PortfolioTabs;