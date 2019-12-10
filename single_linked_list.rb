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
      return current.value if count == index
    end
    return current.value
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
puts list.get(0)
puts list.get(1)