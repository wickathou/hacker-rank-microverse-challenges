class Node
  attr_accessor :value, :next_node
  
  def initialize(value, next_node = nil)
	  @value = value
    @next_node = next_node
  end
end

class LinkedList
  #setup head and tail
  def initialize(val=nil)
    @head = Node.new(val)
    @tail = Node.new(val)
  end
  
  def add(number)
    node = Node.new(number)
    if @head.value.nil?
      @head = node
      @tail = node
    else
      @tail.next_node = node
      @tail = node
    end
  end

  def get(index)
    current = @head
    count = 0
    while count < index && !current.next_node.nil?
      current = current.next_node
      count += 1
      puts count
      return current.value if count == index
    end
    puts count
    return nil if count < index
    return current.value if count = index
  end
  
  def get_node(index)
    current = @head
    count = 0
    while count < index && !current.next_node.nil?
      current = current.next_node
      count += 1
      return current if count == index
    end
    return nil if count < index
    return current if count = index
  end
  
  def add_at(index, val)
    new_node = Node.new(val,get_node(index))
    if index == 0
      @head = new_node
    end
    unless get_node(index).value.nil?
      get_node(index-1).next_node = new_node if index-1 >= 0
    end
  end

  def delete(index)
    if index == 0
      @head = @head.next_node
      return
    end
    unless get_node(index).value.nil?
      get_node(index-1).next_node = get_node(index).next_node if index-1 >= 0
    end
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
list.add_at(1, 11)
list.add_at(0, 13)

puts list.get(0)

puts list.get(1)

puts list.get(2)
# => 11

puts list.get(3)
# => 5

list.delete(2)
puts list.get(2)