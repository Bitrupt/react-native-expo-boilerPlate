import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/theme/theme';
import styles from './styles';

const PortfolioScreen = () => {
  const [selectedTab, setSelectedTab] = useState('holdings');

  const portfolioData = {
    totalValue: 12850.75,
    totalGain: 1250.30,
    totalGainPercent: 10.78,
    dayChange: 245.30,
    dayChangePercent: 1.95,
  };

  const holdings = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      shares: 25,
      avgPrice: 145.20,
      currentPrice: 175.23,
      totalValue: 4380.75,
      gain: 750.75,
      gainPercent: 20.66,
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      shares: 2,
      avgPrice: 2650.00,
      currentPrice: 2845.67,
      totalValue: 5691.34,
      gain: 391.34,
      gainPercent: 7.38,
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      shares: 7,
      avgPrice: 380.50,
      currentPrice: 415.89,
      totalValue: 2911.23,
      gain: 247.73,
      gainPercent: 9.30,
    },
  ];

  const transactions = [
    { type: 'buy', symbol: 'AAPL', shares: 5, price: 172.50, date: '2024-01-15', total: 862.50 },
    { type: 'sell', symbol: 'TSLA', shares: 3, price: 245.80, date: '2024-01-14', total: 737.40 },
    { type: 'buy', symbol: 'MSFT', shares: 2, price: 410.25, date: '2024-01-12', total: 820.50 },
  ];

  const renderTabButton = (tabKey: string, label: string) => (
    <TouchableOpacity
      style={[styles.tabButton, selectedTab === tabKey && styles.activeTabButton]}
      onPress={() => setSelectedTab(tabKey)}
    >
      <Text style={[styles.tabButtonText, selectedTab === tabKey && styles.activeTabButtonText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderHolding = (holding: any) => (
    <View key={holding.symbol} style={styles.holdingCard}>
      <View style={styles.holdingHeader}>
        <View style={styles.holdingInfo}>
          <Text style={styles.holdingSymbol}>{holding.symbol}</Text>
          <Text style={styles.holdingName}>{holding.name}</Text>
          <Text style={styles.holdingShares}>{holding.shares} shares</Text>
        </View>
        <View style={styles.holdingValue}>
          <Text style={styles.holdingPrice}>${holding.totalValue.toLocaleString()}</Text>
          <Text style={[
            styles.holdingGain,
            { color: holding.gain >= 0 ? theme.colors.success : theme.colors.error }
          ]}>
            {holding.gain >= 0 ? '+' : ''}${holding.gain.toFixed(2)} ({holding.gainPercent}%)
          </Text>
        </View>
      </View>
      <View style={styles.holdingDetails}>
        <View style={styles.holdingDetailItem}>
          <Text style={styles.holdingDetailLabel}>Avg Cost</Text>
          <Text style={styles.holdingDetailValue}>${holding.avgPrice}</Text>
        </View>
        <View style={styles.holdingDetailItem}>
          <Text style={styles.holdingDetailLabel}>Current</Text>
          <Text style={styles.holdingDetailValue}>${holding.currentPrice}</Text>
        </View>
      </View>
    </View>
  );

  const renderTransaction = (transaction: any, index: number) => (
    <View key={index} style={styles.transactionCard}>
      <View style={styles.transactionHeader}>
        <View style={[
          styles.transactionTypeIcon,
          { backgroundColor: transaction.type === 'buy' ? theme.colors.success + '15' : theme.colors.error + '15' }
        ]}>
          <Ionicons 
            name={transaction.type === 'buy' ? 'arrow-down' : 'arrow-up'} 
            size={16} 
            color={transaction.type === 'buy' ? theme.colors.success : theme.colors.error} 
          />
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>
            {transaction.type === 'buy' ? 'Bought' : 'Sold'} {transaction.symbol}
          </Text>
          <Text style={styles.transactionDate}>{transaction.date}</Text>
        </View>
        <View style={styles.transactionAmount}>
          <Text style={styles.transactionTotal}>
            {transaction.type === 'buy' ? '-' : '+'}${transaction.total}
          </Text>
          <Text style={styles.transactionDetails}>
            {transaction.shares} @ ${transaction.price}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Portfolio</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      {/* Portfolio Summary */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Total Portfolio Value</Text>
        <Text style={styles.summaryValue}>${portfolioData.totalValue.toLocaleString()}</Text>
        
        <View style={styles.summaryStats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Total Gain/Loss</Text>
            <Text style={[
              styles.statValue,
              { color: portfolioData.totalGain >= 0 ? theme.colors.success : theme.colors.error }
            ]}>
              {portfolioData.totalGain >= 0 ? '+' : ''}${portfolioData.totalGain.toFixed(2)} ({portfolioData.totalGainPercent}%)
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Today's Change</Text>
            <Text style={[
              styles.statValue,
              { color: portfolioData.dayChange >= 0 ? theme.colors.success : theme.colors.error }
            ]}>
              {portfolioData.dayChange >= 0 ? '+' : ''}${portfolioData.dayChange.toFixed(2)} ({portfolioData.dayChangePercent}%)
            </Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {renderTabButton('holdings', 'Holdings')}
        {renderTabButton('transactions', 'Transactions')}
      </View>

      {/* Tab Content */}
      <View style={styles.tabContent}>
        {selectedTab === 'holdings' ? (
          <View style={styles.holdingsContainer}>
            {holdings.map(renderHolding)}
          </View>
        ) : (
          <View style={styles.transactionsContainer}>
            {transactions.map(renderTransaction)}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default PortfolioScreen;